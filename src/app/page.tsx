import CreatePost from "@/components/CreatePost/CreatePost";
import {currentUser} from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();
    console.log("user:", user);
    return (
        <div className="grid grid-col-1 lg:grid-col-10 gap-6">
            <div className="lg:col-span-6">
                {user ? <CreatePost/> : null}
            </div>

            <div className="hidden lg:block lg:col-span-4 sticky top-20">WhoToFollow</div>
        </div>
    );
}
