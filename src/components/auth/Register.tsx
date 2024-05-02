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
import { ReactSelect } from "../ui/ReactSelect";
import { useState, useMemo } from "react";
import { COUNTRY_CODE } from "../../utils/CountryCode";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
export default function Register() {
  const [phoneCountryCode, setPhoneCountryCode] = useState<string>("+234");
  const form = useForm({});

  const countriesList = useMemo(() => {
    return COUNTRY_CODE.map((country) => ({
      label: country.name,
      value: country.name,
    }));
  }, [COUNTRY_CODE]);
  return (
    <>
      <Headers title="Register" />
      <Form {...form}>
        <form className="text-white w-full backg mx-4 sm:mx-8 flex flex-col items-start justify-start gap-y-3 rounded-lg p-4 sm:p-6">
          <div className="flex items-center gap-x-3">
            <span className="border-2 border-white rounded-full h-6 w-6"></span>
            <h2 className="font-semibold text-base sm:text-xl">
              Registration Form
            </h2>
          </div>
          <div className="space-y-3 w-full">
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="relative h-fit">
                  <input
                    type="text"
                    className="!mt-0 text-sm absolute top-[40%]  left-2 text-gray-700 z-10 font-medium h-fit w-fit max-w-[36px] outline-none"
                    value={phoneCountryCode}
                    onChange={(e) => setPhoneCountryCode(e.target.value)}
                  />
                  <FormControl>
                    <Input
                      className=" h-12  pl-12"
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
              <span className="border-2 border-white rounded-full h-6 w-6"></span>
              <h2 className="font-semibold text-base sm:text-xl">
                Terms and Conditions
              </h2>
            </div>
            <div className="rounded-lg p-4 border border-white">
              Please review our privacy policy, which also governs your visit to
              this site, to understand our practices.
              <br />
              Account registration to access certain features of the platform,
              you must create an account and provide accurate personal and
              financial information. you are solely responsible for maintaining
              the confidentiality of your login credentials and for all
              activities that occur under your account.
              <br />
              Eligibility the platform is intended solely for users who are at
              least 18 years old. by using the platform, you represent that you
              meet all eligibility requirements. we reserve the right to
              terminate accounts at our discretion, including for violations of
              these terms.
            </div>
          </div>

          <Button className="border-2 px-6 w-fit mt-4 rounded-[3rem] h-12 font-medium text-white backg">
            Secure Sign Up
          </Button>
          <p className="self-center flex items-center gap-x-2">
            Already have an account?{" "}
            <Link to={"/sign-in"} className="text-[#FFC107] ">
              Sign in
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
}
