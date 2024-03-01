"use client"
import { CreatePostForm } from "../components/CreateForm.js";
import React, { useState, useEffect } from 'react';


export function CreatePin() {
  return (
    <div className="createFrom">
        <h2 className="text-primary text-center">Add a new pin</h2>
        <CreatePostForm/>
    </div>
  )
}
