require "pathname";

puts Pathname.new("./page/").relative_path_from(Pathname.new(__FILE__)).to_s
