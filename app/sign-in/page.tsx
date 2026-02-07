"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignIn() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Sign In
                    </CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="jhon@xyz.com"/>
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Jhon Doe"/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Sign Up</Button>
                        <p>Don&apos;t have an account? <Link href="/sign-up">Sign Up</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}