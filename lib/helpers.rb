require 'json'

include Nanoc::Helpers::Rendering
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Filtering

def templateRefClasses
	classes = %w{asset episode file license chapter feed file_type podcast}
	classes.map { |klass| JSON.parse(IO.read("./sources/template/#{klass}.json")) }
end
