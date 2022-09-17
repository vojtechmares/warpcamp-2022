.PHONY: install-ingress-controller
install-ingress-controller:
	helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
	helm upgrade --install ingress-nginx ingress-nginx/ingress-nginx \
		--namespace ingress-nginx --create-namespace \
		-f ingress-nginx/values.yaml

.PHONY: install-cert-manager
install-cert-manager:
	(cd cert-manager && helm dependency build)
	helm upgrade --install cert-manager ./cert-manager --create-namespace --namespace cert-manager
	sleep 5
	kubectl apply -f cert-manager/clusterissuer.yaml

.PHONY: install-keda
install-keda:
	helm upgrade --install keda keda --repo https://kedacore.github.io/charts --namespace keda --create-namespace

.PHONY: install-rabbitmq
install-rabbitmq:
	helm upgrade --install rabbitmq rabbitmq --repo https://charts.bitnami.com/bitnami --create-namespace --namespace rabbitmq --set auth.username=admin,auth.password=admin,auth.erlangCookie=secret
