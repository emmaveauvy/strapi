"use client"
import { CreatePostForm } from "../components/CreateForm.js";

export default function CreatePin() {
  return (
    <main>
        <h2 className="text-primary text-center">Add a new pin</h2>
        <CreatePostForm/>
    </main>
  )
}
