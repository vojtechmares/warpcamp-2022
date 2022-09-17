.PHONY: build
build:
	docker build -t private.docker.vmpkg.com/keda-demo-consumer:latest . --platform linux/amd64

.PHONY: push
push: build
	docker push private.docker.vmpkg.com/keda-demo-consumer:latest
