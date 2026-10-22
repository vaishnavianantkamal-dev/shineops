export default function Logo({ small = false }) {
  return (
    <span className={small ? 'logo-mark sm' : 'logo-mark'} aria-hidden="true">
      <span />
    </span>
  );
}
