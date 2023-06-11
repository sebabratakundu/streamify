import clsx from "clsx";

export default function Icon({children, className, variant = '', ...rest}) {
  const mIconClass = variant ? `material-icons-${variant}` : 'material-icons';

  return (
    <span className={clsx(mIconClass, className)} {...rest}>{children}</span>
  )
}
