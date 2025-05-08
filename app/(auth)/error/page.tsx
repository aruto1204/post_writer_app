import Link from "next/link";

export default function Error() {
  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">エラーが発生しました</h1>
          <p className="text-sm text-muted-foreground">ログインに失敗しました。</p>
        </div>

        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link href={"/"} className="underline underline-offset-4">
            トップページに戻る
          </Link>
        </p>
      </div>
    </div>
  );
}
