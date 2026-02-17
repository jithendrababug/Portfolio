export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/50 backdrop-blur py-8 text-center dark:border-white/10 dark:bg-white/5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          Jithendra Babu G
        </span>
        . All Rights Reserved.
      </p>
    </footer>
  );
}