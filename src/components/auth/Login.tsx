import { useForm } from "react-hook-form";
import { Headers } from "../composables/Header";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "../ui/Form";
import { Input } from "../ui/Input";
import { MdCheck } from "react-icons/md";
import { Button } from "../ui/Button";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { errorToast } from "../../utils/errorToast";
import { useToast } from "../../utils/toastContainer";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export default function Login() {
  const form = useForm({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { toast } = useToast();

  async function onSubmit(values: any) {
    const payload = {
      ...values,
    };
    setLoading(true);
    await axios
      .post(`https://tflick.onrender.com/user/login`, payload)
      .then((res) => {
        const {data} = res?.data
        //  console.log(data)
          localStorage.setItem("trustUser", JSON.stringify(data))
        toast({
          message: (
            <div className="flex items-center gap-x-2">
              <MdCheck className="text-green-700 text-[22px]" />
              <p>Login Successful</p>
            </div>
          ),
          className: "bg-white",
        });
       
        navigate("/")
      })
      .catch((err) => {
        errorToast(err, toast);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <Headers title="Login" />
      <Form {...form}>
        <div className="w-full px-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-[#0e8233] w-full bg-white shadow mx-auto max-w-3xl my-10 sm:my-20 flex flex-col items-start justify-start gap-y-3 rounded-lg p-4 sm:p-6"
          >
            {" "}
            <div className="flex items-center gap-x-3">
              <h2 className="font-semibold text-base sm:text-xl">
                Welcome Back 👋
              </h2>
            </div>
            <div className="space-y-3 w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder=""
                        type="password"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="border-2 gap-x-2 px-6 w-fit mt-4 rounded-[3rem] h-12 font-medium text-white backg">
              {loading && <Loader2Icon size={22} className="animate-spin" />}
              <p> Sign In</p>
            </Button>
            <p className="self-center flex items-center gap-x-2">
              Don't have an account yet?{" "}
              <Link to={"/register"} className="text-[#FFC107] ">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
}
