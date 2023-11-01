import Pointer from "@/app/Components/Updating-Objects/Pointer";
import SpreadSyntaxForm from "@/app/Components/Updating-Objects/SpreadSyntaxForm";
import UpdatingNestedObject from "@/app/Components/Updating-Objects/UpdatingNestedObject";
import UpdatingWithImmer from "@/app/Components/Updating-Objects/UpdatingWithImmer";

export default function page() {
  return (
    <div>
        <Pointer />
        <SpreadSyntaxForm />
        <UpdatingNestedObject />
        <UpdatingWithImmer />
    </div>
  )
}
