import { Button } from "@/components/ui/button";
import { ChevronLeft, StepBack } from "lucide-react";
import Link from "next/link";

export default function ThemePage() {
    return (
        <div className="flex flex-col gap-4 justify-center items-center min-h-screen py-24 relative">
            <Button className="absolute top-4 left-4" variant="outline" size="sm" asChild>
                <Link href={"/"}>
                    <ChevronLeft /> Back to home
                </Link>
            </Button>
            <h1 className="font-bold text-2xl">Theming of Shortify</h1>
            <div className="bg-transparent max-w-full px-4 md:px-24">
                <h2 className="my-8 font-semibold text-lg">Light Mode</h2>
                <div className="flex flex-wrap">
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-background border border-black dark:border-white"></div>
                        <span>background</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-foreground border border-black dark:border-white"></div>
                        <span>foreground</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-card border border-black dark:border-white"></div>
                        <span>card</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-card-foreground border border-black dark:border-white"></div>
                        <span>card-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-popover border border-black dark:border-white"></div>
                        <span>popover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-popover-foreground border border-black dark:border-white"></div>
                        <span>popover-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-primary border border-black dark:border-white"></div>
                        <span>primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-primary-foreground border border-black dark:border-white"></div>
                        <span>primary-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-secondary border border-black dark:border-white"></div>
                        <span>secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-secondary-foreground border border-black dark:border-white"></div>
                        <span>secondary-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-muted border border-black dark:border-white"></div>
                        <span>muted</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-muted-foreground border border-black dark:border-white"></div>
                        <span>muted-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-accent border border-black dark:border-white"></div>
                        <span>accent</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-accent-foreground border border-black dark:border-white"></div>
                        <span>accent-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-destructive border border-black dark:border-white"></div>
                        <span>destructive</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-destructive-foreground border border-black dark:border-white"></div>
                        <span>destructive-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-border border border-black dark:border-white"></div>
                        <span>border</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-input border border-black dark:border-white"></div>
                        <span>input</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-ring border border-black dark:border-white"></div>
                        <span>ring</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-1 border border-black dark:border-white"></div>
                        <span>chart-1</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-2 border border-black dark:border-white"></div>
                        <span>chart-2</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-3 border border-black dark:border-white"></div>
                        <span>chart-3</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-4 border border-black dark:border-white"></div>
                        <span>chart-4</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-5 border border-black dark:border-white"></div>
                        <span>chart-5</span>
                    </div>
                </div>
            </div>
            <div className="bg-transparent max-w-full px-4 md:px-24">
                <h2 className="my-8 font-semibold text-lg">Dark Mode</h2>
                <div className="flex flex-wrap">
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-background border border-black dark:border-white dark"></div>
                        <span>background</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-foreground border border-black dark:border-white dark"></div>
                        <span>foreground</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-card border border-black dark:border-white dark"></div>
                        <span>card</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-card-foreground border border-black dark:border-white dark"></div>
                        <span>card-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-popover border border-black dark:border-white dark"></div>
                        <span>popover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-popover-foreground border border-black dark:border-white dark"></div>
                        <span>popover-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-primary border border-black dark:border-white dark"></div>
                        <span>primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-primary-foreground border border-black dark:border-white dark"></div>
                        <span>primary-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-secondary border border-black dark:border-white dark"></div>
                        <span>secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-secondary-foreground border border-black dark:border-white dark"></div>
                        <span>secondary-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-muted border border-black dark:border-white dark"></div>
                        <span>muted</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-muted-foreground border border-black dark:border-white dark"></div>
                        <span>muted-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-accent border border-black dark:border-white dark"></div>
                        <span>accent</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-accent-foreground border border-black dark:border-white dark"></div>
                        <span>accent-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-destructive border border-black dark:border-white dark"></div>
                        <span>destructive</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-destructive-foreground border border-black dark:border-white dark"></div>
                        <span>destructive-fg</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-border border border-black dark:border-white dark"></div>
                        <span>border</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-input border border-black dark:border-white dark"></div>
                        <span>input</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-ring border border-black dark:border-white dark"></div>
                        <span>ring</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-1 border border-black dark:border-white dark"></div>
                        <span>chart-1</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-2 border border-black dark:border-white dark"></div>
                        <span>chart-2</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-3 border border-black dark:border-white dark"></div>
                        <span>chart-3</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-4 border border-black dark:border-white dark"></div>
                        <span>chart-4</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-32 min-h-32">
                        <div className="h-16 w-16 rounded-sm bg-chart-5 border border-black dark:border-white dark"></div>
                        <span>chart-5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}