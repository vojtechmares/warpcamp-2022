# example app for KEDA

## Running consumer locally

### Connect to RabbitMQ

Open terminal and run:

```bash
kubectl port-forward --namespace rabbitmq svc/rabbitmq 5672:5672
```

To access RabbitMQ's management interface

```bash
kubectl port-forward --namespace rabbitmq svc/rabbitmq 15672:15672
```
