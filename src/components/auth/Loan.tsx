import { useForm } from "react-hook-form";
import { Headers } from "../composables/Header";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from "../ui/Form";
import { ReactSelect } from "../ui/ReactSelect";
import { Input } from "../ui/Input";
import { MdCheck } from "react-icons/md";
import { Button } from "../ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../../utils/errorToast";
import { useToast } from "../../utils/toastContainer";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import { getSingleFileUrl } from "../../utils/getFileUrl";
import { IoCloseCircle } from "react-icons/io5";

export default function Loan() {
  const form = useForm<any>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  async function onSubmit(values: any) {
    const user = localStorage.getItem("trustUser");
    if (!user) {
      toast({
        message: (
          <div className="flex items-center gap-x-2">
            <IoCloseCircle className="text-red-700 text-[22px]" />
            <p>
              Only registered users can access this... Proceed to registration.
            </p>
          </div>
        ),
        className: "bg-white",
      });
      navigate("/register");
      return;
    }
    const userData = JSON.parse(user);
    setLoading(true);
 
    const promise1 = await new Promise((resolve) => {
      if (values?.proof_of_income[0]) {
        const data = getSingleFileUrl(values?.proof_of_income[0]);
        resolve(data);
      } else {
        resolve("");
      }
    });

    const promise2 = await new Promise((resolve) => {
      if (values?.identification[0]) {
        const data = getSingleFileUrl(values?.identification[0]);
        resolve(data);
      } else {
        resolve("");
      }
    });

    const promise4 = await new Promise((resolve) => {
      if (values?.bussiness_documentation[0]) {
        const data = getSingleFileUrl(values?.bussiness_documentation[0]);
        resolve(data);
      } else {
        resolve("");
      }
    });
    const promise5 = await new Promise((resolve) => {
      if (values?.collateral_document[0]) {
        const data = getSingleFileUrl(values?.collateral_document[0]);
        resolve(data);
      } else {
        resolve("");
      }
    });
    const proof = await promise1;
    const identification = await promise2;
    const bussiness = await promise4
    const collateral = await promise5




    const payload = {
      ...values,
      email: userData?.email,
      proof_of_income: proof,
      identification,
      bussiness_documentation: bussiness,
      collateral_document: collateral,
    };

    await axios
      .post(
        `https://tflick.onrender.com/user/create/loan`,
        { userid: userData?.id, ...payload },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData?.token}`,
          },
        }
      )
      .then((res) => {
        toast({
          message: (
            <div className="flex items-center gap-x-2">
              <MdCheck className="text-green-700 text-[22px]" />
              <p>
                Your details has been recieved. We will get back to you
                shortly...
              </p>
            </div>
          ),
          className: "bg-white",
        });

        //  navigate("/");
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
      <Headers title="Apply for Loan" />
      <Form {...form}>
        <div className="w-full px-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-[#0e8233] w-full bg-white shadow mx-auto max-w-3xl my-10 sm:my-20 flex flex-col items-start justify-start gap-y-3 rounded-lg p-4 sm:p-6"
          >
            {" "}
            <div className="flex items-center gap-x-3">
              <h2 className="font-semibold text-base sm:text-xl">
                Apply for Loan
              </h2>
            </div>
            <p className="text-[#0e8233]">
              <strong> Application fees:</strong> This fee varies on 5% - 10% of
              there loans amount must be paid upfront when submitting.
            </p>
            <p className="text-[#0e8233]">
              <strong> Origination Fee:</strong> This fee covers the cost of
              processing your loan application. It’s usually a percentage of the
              loan amount, commonly around 1-5%, and is often deducted from the
              loan proceeds.
            </p>
            <p className="text-[#0e8233]">
              Ready to take the first step towards securing your financial
              future? TrustFlick makes it simple and convenient to apply for a
              loan that suits your needs, whether personal or business-related.
              Fill out the form below to get started
            </p>
            <div className="space-y-3 w-full">
              <h2 className="text-[#0e8233] font-semibold text-[15px] sm:text-base">
                Contact Information{" "}
              </h2>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("name")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full grid grid-cols-2 items-center gap-3">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>DOB</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type="date"
                          className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("dob")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ssn"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>SSN</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type="number"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("ssn")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full grid grid-cols-2 items-center gap-3">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone Number"
                          type="tel"
                          className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("phone")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="alternative_phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Alt. Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Alternative Phone Number"
                          type="tel"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("alternative_phone")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full grid grid-cols-2 items-center gap-3">
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Lagos"
                          type="text"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("state")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g Ikeja"
                          type="text"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("city")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                  control={form.control}
                  name="current_time"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Time at Current Address (in years)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="2014"
                          type="number"
                          className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("current_time")}
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
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Address"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("address")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="previous_address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Previous Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Address"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("previous_address")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h2 className="text-[#0e8233] font-semibold text-[15px] sm:text-base">
                Employment Information{" "}
              </h2>

              <FormField
                control={form.control}
                name="employer_status"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Employment Status</FormLabel>
                    <FormControl>
                      <ReactSelect
                        placeHolder="Select Employment Status"
                        options={[
                          { value: "Employed", label: "Employed" },
                          { value: "Unemployed", label: "Unemployed" },
                          { value: "Self-Employed", label: "Self-Employed" },
                          { value: "Retired", label: "Retired" },
                          { value: "Student", label: "Student" },
                        ]}
                        {...form.register("employer_status")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employer_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Employer's Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("employer_name")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Occupation/Position</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g Trader"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("position")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full grid grid-cols-2 items-center gap-3">
                <FormField
                  control={form.control}
                  name="employer_state"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Employer's State</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Lagos"
                          type="text"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("employer_state")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="employer_city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Employer's City</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g Ikeja"
                          type="text"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("employer_city")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="employer_address"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Employer's Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Address"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("employer_address")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employer_zipcode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Employer's Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("employer_zipcode")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="length_of_employment"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Length of Employment (in Years) </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("length_of_employment")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthly_income"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Monthly Income</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("monthly_income")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <h2 className="text-[#0e8233] font-semibold text-[15px] sm:text-base">
                Financial Information
              </h2>
              <FormField
                control={form.control}
                name="total_monthly_debt"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Total Monthly Debt</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("total_monthly_debt")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="monthly_expenses"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Monthly Expenses</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("monthly_expenses")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rental_payment"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Rental Payment</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("rental_payment")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="credit_score"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Credit Score</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="12"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("credit_score")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h2 className="text-[#0e8233] font-semibold text-[15px] sm:text-base">
                Loan Details
              </h2>

              <FormField
                control={form.control}
                name="loan_amount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Loan Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="103929"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("loan_amount")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="loan_purpose"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Loan Purpose</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Loan Purpose"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("loan_purpose")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desired_loan_term"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Desired Loan Term (in Months)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1"
                        type="number"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("desired_loan_term")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h2 className="text-[#0e8233] font-semibold text-[15px] sm:text-base">
                Bank Account Details{" "}
              </h2>
              <FormField
                control={form.control}
                name="account_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Account Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        type="text"
                        className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("account_name")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bank_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Bank Name"
                        type="text"
                        className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("bank_name")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full grid grid-cols-2 items-center gap-3">
                <FormField
                  control={form.control}
                  name="account_number"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Account Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Account Number"
                          type="number"
                          className="w-full inline-flex h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("account_number")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="routing_number"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel> Routing Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder=" Routing Number"
                          type="number"
                          className="w-full h-12 bg-transparent px-4 rounded-lg "
                          {...form.register("routing_number")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="proof_of_income"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Proof of Income</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="file"
                        accept="image/*"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("proof_of_income")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="identification"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Identification</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="file"
                        accept="image/*"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("identification")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bussiness_documentation"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Business Documents</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="file"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("bussiness_documentation")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collateral_document"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Collateral Documents</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="file"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...form.register("collateral_document")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="border-2 gap-x-2 px-10 w-fit mt-4 rounded-[3rem] h-12 font-medium text-white backg">
              {loading && <Loader2Icon size={22} className="animate-spin" />}
              <p>Submit</p>
            </Button>
          </form>
        </div>
      </Form>
    </>
  );
}
