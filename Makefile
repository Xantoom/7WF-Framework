WEB_DIR = web
PNPM = cd $(WEB_DIR) && pnpm

.PHONY: lint format dev build

lint:
	$(PNPM) lint

format:
	$(PNPM) format

dev:
	$(PNPM) dev

build:
	$(PNPM) build