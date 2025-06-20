import { Ratelimit as RateLimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// create a rate limiter that allows 100 requests per 60 seconds
const rateLimit = new RateLimit({
  redis: Redis.fromEnv(),
  prefix: "ratelimit:free",
  limiter: RateLimit.slidingWindow(100, "60 s"),
  analytics: true,
});

export default rateLimit;
