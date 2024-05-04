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
    let bussiness: any[] = [];
    let collateral: any[] = [];
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
    const proof = await promise1;
    const identification = await promise2;

    if (values?.bussiness_documentation?.length > 1) {
      for (let col of values?.bussiness_documentation) {
        const promise6 = new Promise((resolve) => {
          const data = getSingleFileUrl(col);
          resolve(data);
        });

        const coll = await promise6;
        bussiness.push(coll);
      }
    } else if (values?.bussiness_documentation) {
      const promise4 = await new Promise((resolve) => {
        if (values?.bussiness_documentation[0]) {
          const data = getSingleFileUrl(values?.bussiness_documentation[0]);
          resolve(data);
        } else {
          resolve("");
        }
      });

      const biz = await promise4;
      bussiness = [biz];
    }

    if (values?.collateral_document?.length > 1) {
      for (let col of values?.collateral_document) {
        const promise5 = new Promise((resolve) => {
          const data = getSingleFileUrl(col);
          resolve(data);
        });

        const coll = await promise5;

        collateral.push(coll);
      }
    } else if (values?.collateral_document) {
      const promise6 = await new Promise((resolve) => {
        if (values?.collateral_document[0]) {
          const data = getSingleFileUrl(values?.collateral_document[0]);
          resolve(data);
        } else {
          resolve("");
        }
      });

      const coll = await promise6;
      collateral = [coll];
    }

    const payload = {
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
                        multiple
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
                        multiple
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

/**
 "previous_zipcode":"poikeu",
    "current_zipcode":"poikeu",
    "state":"poikeu",
    "city":"poikeu",
    "name":"poikeu",
    "ssn":"poikeu",
    "dob":"poikeu",
    "alternative_phone":"poikeu",
    "phone":"poikeu",
    "email":"poikeu",
    "employer_address":"poikeu",
    "employer_state":"poikeu",
    "employer_status":"poikeu",
    "employer_city":"poikeu",
    "employer_name":"poikeu",
    "employer_zipcode":"poikeu",
    "monthly_income":200,
    "length_of_employment":12,
    "position":"poikeu",
    "credit_score":12,
    "total_monthly_debt":12,
    "monthly_expenses":12,
    "rental_payment":12,
    "loan_amount":12,
    "loan_purpose":"polirku",
    "desired_loan_term":12,
    "account_name":"poikeiu",
    "bank_name":"poikeiu",
    "account_number":"poikeiu",
    "routing_number":"poikeiu"
 */
