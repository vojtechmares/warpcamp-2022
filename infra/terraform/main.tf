resource "digitalocean_kubernetes_cluster" "k8s" {
  name   = "warpcamp-2022-k8s"
  region = "fra1"
  version = "1.24.4-do.0"
  tags    = ["warpcamp-2022", "demo"]

  node_pool {
    name       = "worker-pool"
    size       = "s-2vcpu-4gb"
    node_count = 3
  }
}

resource "digitalocean_loadbalancer" "lb" {
  name   = "warpcamp-2022-lb"
  region = "fra1"

  droplet_tag = "k8s:${digitalocean_kubernetes_cluster.k8s.id}"

  healthcheck {
    port     = 30080
    protocol = "tcp"
  }

  forwarding_rule {
    entry_port      = 80
    target_port     = 30080
    entry_protocol  = "tcp"
    target_protocol = "tcp"
  }

  forwarding_rule {
    entry_port      = 443
    target_port     = 30443
    entry_protocol  = "tcp"
    target_protocol = "tcp"
  }
}

resource "cloudflare_record" "warp" {
  zone_id = var.cloudflare_zone_id
  name    = "warp"
  value   = digitalocean_loadbalancer.lb.ip
  type    = "A"
}

resource "cloudflare_record" "warp_wildcard" {
  zone_id = var.cloudflare_zone_id
  name    = "*.warp"
  value   = cloudflare_record.warp.hostname
  type    = "CNAME"
}
