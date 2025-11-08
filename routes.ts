import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import adminRoutes from "./routes/admin.routes";
import vendorRoutes from "./routes/vendors.routes";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.use("/api/admin", adminRoutes);
  app.use("/api/vendors", vendorRoutes);

  // Health check
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
