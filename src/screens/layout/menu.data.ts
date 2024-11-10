interface ITitle {
   title: string;
   type: "link" | "sub";
   subItems?: string[];
   isFooter?: boolean;
}
export const titles: ITitle[] = [
   {
      title: "About Us",
      type: "link",
      isFooter: true,
   },
   {
      title: "our services",
      type: "sub",
      subItems: ["First Item", "Second Item", "Third Item"],
   },
   {
      title: "Work with Us",
      type: "link",
      isFooter: true,
   },
   {
      title: "blog",
      type: "link",
   },
];
