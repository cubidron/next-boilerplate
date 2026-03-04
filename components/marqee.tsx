import Link from "next/link";

export default function Marquee(props: {
    title?: string;
    className?: string;
    items: { name: string; url: string; image: string }[];
}) {
    return (
        <section
            className={`container flex flex-col mx-auto group items-center ${
                props.className || ""
            }`}
        >
            <div className="absolute inset-0 size-full overflow-hidden">
                <div className="size-full bg-gradient-to-t from-body/0 to-body/20 not-group-hover:opacity-0 not-group-hover:-translate-y-12 not-group-hover:blur-xl ease-in-out duration-1000" />
            </div>
            {props.title && (
                <p className="font-medium text-body mb-4 text-center lg:text-start text-base lg:text-xl">
                    {props.title}
                </p>
            )}
            <div
                className="slider"
                style={{
                    ["--width" as any]: "10rem",
                    ["--height" as any]: "8rem",
                    ["--quantity" as any]: props.items.length,
                    ["--duration" as any]: "24s",
                }}
            >
                <div className="list">
                    {props.items.map((item, i) => (
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                            title={item.name}
                            key={i}
                            className="item"
                            style={{ ["--position" as any]: i }}
                        >
                            <img src={item.image} alt={`logo ${i + 1}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
