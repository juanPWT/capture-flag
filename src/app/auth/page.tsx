import AuthForm from "./components/AuthForm";

export default function Auth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 md:p-24 gap-2 md:gap-4">
      <h1 className="text-xl font-bold text-gray-600 dark:text-white">
        Capture Flag
      </h1>
      <AuthForm />
    </main>
  );
}
