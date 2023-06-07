import { Card } from "../components/Card";

export function PetsScreen() {
  return (
    <div className=" columns-3 gap-8 ">
      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{ src: "/icons/image.svg" }}
      />

      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{ src: "/icons/cao.svg" }}
      />

      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{ src: "/icons/gato.svg" }}
      />
      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{ src: "/icons/cat.svg" }}
      />

      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{
          src: "/icons/cao.svg",
        }}
      />

      <Card
        name="Baxter"
        information="French Bulldoog, 5-year-old, 12kgs"
        icon={{ src: "/icons/fof.svg" }}
      />
    </div>
  );
}
