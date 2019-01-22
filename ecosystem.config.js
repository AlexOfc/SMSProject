module.exports = {
    apps : [{
	    name   : "dev",
	    script : "bin/www",
	    "env": {
	        "NODE_ENV": "development",
	        "redis_ip" :    "127.0.0.1",
			"redis_port":   6379,
			"secret" : "networksecrettoken"
		}
    },
    {
	    name   : "pro",
	    script : "bin/www",
	    "env": {
	        "NODE_ENV": "production",
	        "redis_ip" :    "127.0.0.1",
			"redis_port":   6379,
			"secret" : "networksecrettoken"
		}
    }
    ]
}
