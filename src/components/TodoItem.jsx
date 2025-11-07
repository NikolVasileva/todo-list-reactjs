import styles from "./TodoItem.module.css"

export default function TodoItem({
    _id,
    title,
    completed
}) {
    const classes = [styles["todo-item"]]

    if(completed) {
        classes.push(styles["todo-completed"])
    }

    return(
        // <li className={completed && styles["todo-completed"]}>{title}</li>
        <li className={classes.join(" ")}>{title}</li>

    )
}