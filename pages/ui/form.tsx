import React from "react";
import Button from "./button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O campo nome deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  phone: z
    .string()
    .min(10, { message: "Insira um número de telefone válido." }),
  website: z
    .string()
    .min(3, { message: "O campo website deve ter no mínimo 3 caracteres." }),
  midia: z
    .string()
    .min(1, { message: "Selecione uma opção de mídia." })
    .refine(
      (value) =>
        ["instagram", "facebook", "twitter", "linkedin"].includes(value),
      {
        message:
          "Selecione uma mídia válida.",
      }
    ),
});

type UserFormSchema = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: UserFormSchema) => {
    try {
      const validatedData = formSchema.parse(data);
      console.log("Dados do formulário validados:", validatedData);

      axios.post("/api/sendEmail", {
        messageBody: `Nome: ${validatedData.name}, Email: ${validatedData.email}, Telefone: ${validatedData.phone}, Site: ${validatedData.website}, Midia: ${validatedData.midia}`,
      });

      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      if (error instanceof z.ZodError) {
        console.error("Erros de validação:", error.errors);
      }
    }
  };

  return (
    <div className="flex flex-col gap-16 p-[34px] md:pb-[100px] text-white md:bg-[url(/images/backgroundWelcome.svg)] bg-cover lg:items-center xl:px-[60px] xl:flex-row xl:pt-[100px]">
      <div className="flex-1">
        <span className="text-[25px] text-[#0FCE33] proxima-light">
          ENTRE EM CONTATO
        </span>
        <h2 className="text-[30px] md:text-[50px] lg:text-[45px] xl:text-[50px] xxl:text-[65px] my-[17px] proxima-bold">
          Aumente seu resultado de vendas e performance
        </h2>
        <p className="text-[20px] md:text-[26px] xxl:text-[30px] opacity-80 xl:pb-[200px] xxl:pb-[250px] proxima-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col p-[30px] bg-white rounded-md md:w-[586px] self-center">
          <h3 className="text-[26px] text-[#380158] mb-[20px] xxl:text-[35px] proxima-bold">
            Fale com um especialista
          </h3>
          <form
            id="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-[23px]"
          >
            <input
              id="name"
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
            <input
              id="email"
              type="email"
              placeholder="E-mail profissional"
              {...register("email")}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
            <input
              id="phone"
              type="text"
              placeholder="Celular/Whatsapp"
              {...register("phone")}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone.message}</span>
            )}
            <input
              id="site"
              type="text"
              placeholder="Site"
              {...register("website")}
            />
            {errors.website && (
              <span style={{ color: "red" }}>{errors.website.message}</span>
            )}
            <select
              id="midia"
              defaultValue="default"
              {...register("midia")}
              className="bg-[#F7F7F7] text-black text-[19px] py-[22px] px-[17px] proxima-light"
            >
              <option value="default" disabled>
                Escolha uma opção
              </option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">Linkedin</option>
            </select>
            {errors.midia && (
              <span style={{ color: "red" }}>{errors.midia.message}</span>
            )}
            <Button label={"Enviar"} kind={"form"} />
          </form>
        </div>
        <p className="text-center md:text-[17px] opacity-70">
          Ao enviar esse formulário, você reconhece que leu <br /> e concorda
          com a nossa <strong>Política de Privacidade</strong>.
        </p>
      </div>
    </div>
  );
};

export default Form;
