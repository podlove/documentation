---
title: "Publisher: Constraints"
has_toc: true
---

# NOT YET RELEASED

Constraints are still work in progress and not yet part of the master branch. To follow the development, please visit the [constraint branch](https://github.com/podlove/podlove-publisher/tree/constraint).

# Constraints & Validations

Constraints and Validations are ways for the Publisher to verify the integrity of the whole system. The goal is to regularly check relevant system components. The user should have an overview over all components and their status. If something is not configured perfectly, there should be detailed instructions for the user to improve the situation.

Developers and module writers are encouraged to add their own constraints to check the integrity of their modules. This document is a guide to create constraints.

## What is a good Constraint?

Constraints should check *one* thing at a time. So "Enclosure Mime Type is Correct" is a good constraint; "The files are ok" is a much less useful one. Try to validate one attribute of an entity at a time unless you need to verify attribute relationships. However, keep the possible constraint-violation causes in mind. Don't create a bunch of constraints when the cause for all of them are identical.

## The Constraint Class

A Constraintclass must inherit from `Podlove\Constraint\Constraint`. The class constant `SEVERITY` defines the severity in case of a violation. Those are the available severities:

- `Constraint::SEVERITY_WARNING`: Something is not quite right. Important services are probably available but the issue should be adressed.
- `Constraint::SEVERITY_CRITICAL`: Must be solved as soon as possible.

The class must implement both methods `the_title` and `the_description`. `the_title` should be plain text and communicate the violation. `the_description` outputs a description of the constraint violation. It should address user directly, explain what's wrong and should contain steps to resolve the issue. It may contain HTML and should be wrapped in `<p>` tags.

The heart of the implementation is the `isValid` method. It contains the actial check for validity and must return a boolean response. You will be verifying some kind of entity which will be available via the variable `$this->resource`.

Have a look at the following example implementation:

```php
<?php
namespace Podlove\Modules\MyModule;

use Podlove\Constraint\Constraint;

class UrlIsValid extends Constraint {
	const SEVERITY = Constraint::SEVERITY_CRITICAL;

	public function the_title() {
		echo __('Url is not valid.', 'podlove');
	}

	public function the_description() {
		$url = $this->resource->getUrl();
		$edit_url = admin_url('admin.php?page=your_module_page');
		?>
		<p>
			<?php echo sprintf(
				__('The url %s is not valid.', 'podlove'),
				'<a href="' . $url . '">' . $url . '</a>'
			);
			?>
		</p>
		<p>
			<a href="<?php echo $edit_url ?>">
				<?php echo __('Change url setting', 'podlove'); ?>
			</a>
		</p>
		<?php
	}

	public function isValid() {
		return $this->resource->isUrlValid();
	}
}
```

## Setting up the validatable Entity

Your validatable entity must implement the `Validatable` interface. This requires the implementation of `constraint($constraintClassName)` for adding a constraint to the entity and `validate` for validating all constraints. You can probably just copy the following implementation:

```php
<?php
namespace Podlove\Modules\MyModule;

use Podlove\Constraint\Validatable;

class MyEntity implements Validatable {
	
	private static $constraints = array();

	public static function constraint($constraintClassName) {
		self::$constraints[] = $constraintClassName;
	}

	public function validate() {
		foreach (self::$constraints as $constraintClassName) {
			$constraint = new $constraintClassName($this);
			$constraint->validate();
		}
	}

}

MyEntity::constraint( '\Podlove\Modules\MyModule\UrlIsValid' );
```

The last line in the example actually registers the constraint for the entity.

If you are writing a module, you don't *need* to create a separate entity. Your module class itself may implement the `Validatable` interface. However, once the module class becomes unwieldy, you may consider to extract entities and register constraints for them.

## Executing Validations

The constraint is registered. However, you still need to kick off the actual validation. You need to decide when it's a good time to validate. Basically, you want to revalidate whenever your entities or configs change and there is a chance that something might have gone wrong. It is *not* good practice to validate on each request!

If you are just validating module settings, a hook on the modules settings page might be a good place:

```php
<?php
namespace Podlove\Modules\MyModule;

function validate() {
	// kick off validations registered on your module class
	MyModule::instance()->validate();
	// ... and/or fetch all entities and validate them
	foreach (MyEntity::all() as $entity) {
		$entity->validate();
	}
}

add_action('load-podlove_page_podlove_settings_modules_handle', '\Podlove\Modules\MyModule\validate');
```
