import Link from "next/link";
import "@/components/marqee.css";

export default function Marquee(props: {
    title?: string;
    className?: string;
    items: { name: string; url: string; image: string }[];
}) {
    return (
        <section
            className={`relative flex flex-col mx-auto py-12 group items-center ${
                props.className || ""
            }`}
        >
            <div className="absolute inset-0 size-full overflow-hidden">
                <div className="size-full bg-linear-to-t from-body/0 to-body/20 not-group-hover:opacity-0 not-group-hover:-translate-y-12 not-group-hover:blur-xl ease-in-out duration-1000" />
            </div>
            {props.title && (
                <p className="font-light text-white mb-4 text-center lg:text-start text-base lg:text-xl">
                    {props.title}
                </p>
            )}
            <div
                className="slider"
                style={{
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--width" as any]: `${props.items.length * 1}rem`,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--height" as any]: "8rem",
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--quantity" as any]: props.items.length,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--duration" as any]: `${props.items.length * 2}s`,
                }}
            >
                <div className="list">
                    {props.items.map((item, i) => (
                        <Link
                            target={item.url ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            href={item.url}
                            title={item.name}
                            key={i}
                            className="item"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
