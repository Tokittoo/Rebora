"use client";

import toast, { Toaster } from 'react-hot-toast';
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link2, Scissors, Copy } from "lucide-react";

export default function URLShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const longUrlRef = useRef<HTMLInputElement>(null);
  const aliasRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error === "Please enter a URL to shorten" && longUrlRef.current) {
      longUrlRef.current.focus();
    }
    if (error === "Please enter your custom URL" && aliasRef.current) {
      aliasRef.current.focus();
    }
  }, [error]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!longUrl) {
      setError("");
      setShortUrl("");
      toast.error("Please enter a URL to shorten")
      setError("Please enter a URL to shorten");
      return;
    }

    if (!alias) {
      setError("");
      setShortUrl("");
      toast.error("Please enter your custom URL")
      setError("Please enter your custom URL");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      longUrl: longUrl,
      alias: alias,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect,
    };


    toast.promise(
      fetch("/api/generate", requestOptions)
        .then(async (response) => {
          const result = await response.json() as { message: string; success: boolean; error: boolean };
          if (result.success === false || result.error === true) {
            setShortUrl("");
            setError(result.message);
            throw new Error(result.message); // Rejects the promise to trigger the error toast
          } else {
            setError("");
            setShortUrl(`${process.env.NEXT_PUBLIC_HOST}/${alias}`);
            setLongUrl("");
            setAlias("");
            console.log(result);
            return result.message; // Resolves the promise to trigger the success toast
          }
        })
        .catch((error) => {
          throw error; // Ensures any errors trigger the error toast
        }),
      {
        loading: "Processing...",
        success: <b>URL shortened successfully!</b>,
        error: <b>URL already exists.</b>,
      }
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        toast.success("URL copied to clipboard");
        console.log("URL copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy URL: ");
        console.error("Failed to copy URL: ", err);
      });
  };

  const handleShortAnotherUrl = () => {
    setShortUrl("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            URL Shortener
          </CardTitle>
          <CardDescription className="text-center font-serif">
            Trim your links, expand your reach
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="longUrl"
                className="text-sm font-medium"
              >
                Long URL *
              </Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-primary bg-primary text-primary-foreground">
                  <Link2 className="h-5 w-5" />
                </span>
                <Input
                  id="longUrl"
                  type="url"
                  placeholder="https://example.com/very/long/url"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  ref={longUrlRef}
                  className="rounded-l-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="alias"
                className="text-sm font-medium"
              >
                Custom Alias *
              </Label>
              <Input
                id="alias"
                type="text"
                placeholder="my-custom-url"
                value={alias}
                onChange={(e) => setAlias(e.target.value.replace(/\s+/g, '-').toLowerCase())}
                ref={aliasRef}
                className=""
              />
            </div>
            <Button
              type="submit"
              className="w-full active:scale-95 transition ease-linear"
            >
              Generate Short URL
            </Button>
            {
              shortUrl &&
              <Button
                type="submit"
                className="w-full"
                variant="outline"
                onClick={handleShortAnotherUrl}
                >
                Shorten another URL
              </Button>
            }
            <Toaster 
              position="top-center"
            />
          </form>
        </CardContent>
        {error && (
          <Alert variant="destructive" className="mt-4 bg-destructive/10 dark:bg-destructive/20 rounded-tr-none rounded-tl-none">
            <AlertTitle className="font-semibold">Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {shortUrl && (
          <CardFooter className="flex flex-col items-center space-y-2">
            <div className="text-sm font-medium text-secondary-foreground">
              Your shortened URL:
            </div>
            <div className="flex gap-6 items-center space-x-2">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center font-medium"
                  >
                  {shortUrl}
                </a>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyToClipboard}
                  >
                  <Copy className="h-2 w-2" />
                </Button>
              </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
