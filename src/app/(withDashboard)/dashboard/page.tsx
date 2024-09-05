import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {

  const session = await getServerSession(authOptions)
  const userImage = session?.user?.image || "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg";

  return (
    <div>
      {
        session?.user &&
        <>
          <Image className="rounded-full mx-auto my-5" src={userImage} alt="user image" height={100} width={200} />
          <h1 className="text-4xl text-center">Welcome {session?.user?.name}</h1>
          <h1 className=" text-center mt-2">Welcome {session?.user?.email}</h1>
        </>

      }
    </div>
  );
};

export default DashboardPage;
