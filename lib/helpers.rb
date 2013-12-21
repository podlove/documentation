require 'json'

include Nanoc::Helpers::Rendering
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Filtering

# module Podlove

	def templateRefClasses
		[
			JSON.parse(IO.read('./sources/template/episode.json')),
			JSON.parse(IO.read('./sources/template/chapter.json')),
		]
	end

# end
