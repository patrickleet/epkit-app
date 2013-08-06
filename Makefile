start:
		mrt

debug:
		NODE_OPTIONS='--debug' mrt run

node-inspector:
		node-inspector

install-deps:
		npm install -g node-inspector