# Event driven autoscaling with KEDA on Kubernetes

## Problem

Scaling jobs, queue consumers, etc.

## Solution

KEDA has many scalers (sources), from AWS SQS, RabbitMQ, Kafka to Prometheus metrics. See [scalers](https://keda.sh/docs/2.8/scalers/).

Inside, KEDA is built on top of [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).

Thank you for coming to my TED Talk.

## Slides

https://docs.google.com/presentation/d/1qG-Hez5fXAo8ylCLC8Tcqe1kibR5iZFGSDgkM-5ROdM/edit?usp=sharing
