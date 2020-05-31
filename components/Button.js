import s from "./modules/Button.module.css";
import Link from "next/link";

export function Button(
    props = {
        label,
        className,
        bgColor,
        color,
        href,
    }
) {
    return (
        <Link href={`#` + props.href}>
            <button
                className={s.button}
                style={{ backgroundColor: props.bgColor, color: props.color }}
            >
                {props.label}
            </button>
        </Link>
    );
}
