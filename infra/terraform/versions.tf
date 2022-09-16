terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.23.0"
    }
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.22.3"
    }
  }
}
