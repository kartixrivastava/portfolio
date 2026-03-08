"use client";

export default function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
            <div className="absolute inset-0 bg-background mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
    );
}
