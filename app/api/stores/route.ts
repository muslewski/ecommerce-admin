import { NextResponse } from "next/server";

import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

// This function handles POST requests to create new store
export async function POST(req: Request) {
  try {
    // Get currently authenticated user
    const user = await currentUser();
    const userId = user?.id;
    console.log("[STORES_POST] userID:", userId);

    //  Get body from request
    const body = await req.json();
    console.log("[STORES_POST] body:", body);
    const { name } = body;

    // Check if user is authenticated
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if name is provided
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // Create store in database
    const store = await prisma.store.create({
      data: {
        name,
        userId,
      },
    });

    console.log("[STORES_POST] store:", store);

    // Return the created store as JSON response
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
