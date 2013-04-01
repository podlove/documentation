require "coderay"

class SyntaxHighlight < Nanoc::Filter
	identifier :syntax_highlight

	def run(content, params=[])
		content.gsub(/```([a-zA-Z]+)?\n([\s\S]+?)\n```/) do
			language = $1 || 'plain'
			puts "meow #{language} | #{$2}"

			html = ''
			html += '<div class="highlight ' + language + ' ">'
			html += CodeRay.scan($2, language.to_sym).html(
				:tab_width => 4,
				:wrap => :div,
				:css => :class,
				:line_numbers => :table,
				:line_number_anchors => false,
				:bold_every => false
			)
			html += '</div>'

			html
		end
	end
	
end