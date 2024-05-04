import { useForm } from "react-hook-form";
import { Headers } from "../composables/Header";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "../ui/Form";
import { MdCheck } from "react-icons/md";
import { Input } from "../ui/Input";
import { ReactSelect } from "../ui/ReactSelect";
import { useState, useMemo, useEffect } from "react";
import { COUNTRY_CODE } from "../../utils/CountryCode";
import { Button } from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { useToast } from "../../utils/toastContainer";
import { errorToast } from "../../utils/errorToast";
export default function Register() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneCountryCode, setPhoneCountryCode] = useState<string | undefined>(
    "+234"
  );
  const form = useForm({});

  const countriesList = useMemo(() => {
    return COUNTRY_CODE.map((country) => ({
      label: country.name,
      value: country.name,
    }));
  }, []);
  const country = form.watch("country");

  useEffect(() => {
    if (country) {
      const currentCountryCode = COUNTRY_CODE.find(
        (v) => v.name === country
      )?.dial_code;

      setPhoneCountryCode(currentCountryCode);
    }
  }, [country]);

  async function onSubmit(values: any) {
    setLoading(true);
    const payload = {
      ...values,
      phone: phoneCountryCode + values.phoneNumber,
    };
    setLoading(true);
    await axios
      .post("https://tflick.onrender.com/user/signup", payload)
      .then((res) => {
        const {data} = res?.data
       // console.log(data)
        localStorage.setItem("trustUser", JSON.stringify(data))
        toast({
          message: (
            <div className="flex items-center gap-x-2">
              <MdCheck className="text-green-700 text-[22px]" />
              <p>Registration Successful</p>
            </div>
          ),
          className: "bg-white",
        });
       
        navigate("/");
         
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
      <Headers title="Register" />
      <Form {...form}>
        <div className="w-full px-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-[#0e8233] w-full bg-white shadow mx-auto max-w-3xl my-10 sm:my-20 flex flex-col items-start justify-start gap-y-3 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center gap-x-3">
              <h2 className="font-semibold text-base sm:text-xl">
                Registration Form
              </h2>
            </div>
            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        type="text"
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
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        type="text"
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
                        placeholder="Password"
                        type="password"
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
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Address"
                        type="text"
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
                name="country"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <ReactSelect
                        placeHolder="Country"
                        options={countriesList}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="relative h-fit">
                    <input
                      type="text"
                      className=" text-sm absolute top-[30%]  left-2 text-gray-700 z-10 font-medium h-fit w-fit max-w-[36px] outline-none"
                      value={phoneCountryCode}
                      onChange={(e) => setPhoneCountryCode(e.target.value)}
                    />
                    <FormControl>
                      <Input
                        className=" h-12 rounded-lg  pl-12"
                        placeholder="Enter phone number"
                        {...field}
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="account_type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <ReactSelect
                        placeHolder="Account Type"
                        options={[
                          { value: "checking", label: "Checking" },
                          { value: "savings", label: "Savings" },
                        ]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-start justify-start gap-y-6 mt-5">
              <div className="flex items-center gap-x-3">
                <h2 className="font-semibold text-base sm:text-xl">
                  Terms and Conditions
                </h2>
              </div>
              <div className="rounded-lg p-4 border border-[#0e8233">
                Please review our privacy policy, which also governs your visit
                to this site, to understand our practices.
                <br />
                Account registration to access certain features of the platform,
                you must create an account and provide accurate personal and
                financial information. you are solely responsible for
                maintaining the confidentiality of your login credentials and
                for all activities that occur under your account.
                <br />
                Eligibility the platform is intended solely for users who are at
                least 18 years old. by using the platform, you represent that
                you meet all eligibility requirements. we reserve the right to
                terminate accounts at our discretion, including for violations
                of these terms.
              </div>
            </div>

            <Button className="border-2 gap-x-2 px-6 w-fit mt-4 rounded-[3rem] h-12 font-medium text-white backg">
              {loading && <Loader2Icon size={22} className="animate-spin" />}
              <p> Secure Sign Up</p>
            </Button>
            <p className="self-center flex items-center gap-x-2">
              Already have an account?{" "}
              <Link to={"/sign-in"} className="text-[#FFC107] ">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
}
