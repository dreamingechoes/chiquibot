require 'programr'

brains = Dir.glob("lib/chiquibot/*")

CHIQUIBOT = ProgramR::Facade.new
CHIQUIBOT.learn(brains)
