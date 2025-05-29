import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MedicamentosLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession();

    if (!session) {
        redirect("/"); // redireciona para a página de login
    }

    return <>{children}</>;
}
