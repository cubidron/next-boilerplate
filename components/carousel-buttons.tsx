"use client";

import { Icon } from "@iconify/react/dist/iconify.cjs";
import { Button } from "./ui/button";

export default function CarouselButtons(props: { target: string }) {
    return (
        <span className="flex gap-2 mt-auto">
            <Button
                onClick={() => {
                    //scroll backwards
                    const targetElement = document.getElementById(props.target);
                    const childElement = targetElement?.firstChild;
                    if (targetElement && childElement) {
                        targetElement.scrollBy({
                            left: -(childElement as HTMLElement).clientWidth,
                            behavior: "smooth",
                        });
                    }
                }}
                variant="dark"
                size="icon"
            >
                <Icon icon="ri:arrow-left-line" className="text-2xl" />
            </Button>
            <Button
                onClick={() => {
                    //scroll forwards
                    const targetElement = document.getElementById(props.target);
                    const childElement = targetElement?.firstChild;
                    if (targetElement && childElement) {
                        targetElement.scrollBy({
                            left: (childElement as HTMLElement).clientWidth,
                            behavior: "smooth",
                        });
                    }
                }}
                variant="dark"
                size="icon"
            >
                <Icon icon="ri:arrow-right-line" className="text-2xl" />
            </Button>
        </span>
    );
}
