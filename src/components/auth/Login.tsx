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
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
export default function Login() {
  const form = useForm({});

  async function onSubmit(values: any) {
    const payload = {
      ...values,
    };
  }
  return (
    <>
      <Headers title="Login" />
      <Form {...form}>
        <div className="w-full px-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-white w-full backg mx-auto max-w-3xl my-10 sm:my-20 flex flex-col items-start justify-start gap-y-3 rounded-lg p-4 sm:p-6"
          >
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

            <Button className="border-2 px-6 w-fit mt-4 rounded-[3rem] h-12 font-medium text-white backg">
              Sign In
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
