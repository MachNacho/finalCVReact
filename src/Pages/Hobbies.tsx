import { BadgeCard } from "../Components/CardBadge/BadgeCard";
import { FooterCentered } from "../Components/FooterCentered/FooterCentered";
import { HeaderSimple } from "../Components/HeaderSimple/HeaderSimple";
import HobbiesList from "../data/Hobbies/HobbiesList";

export default function () {
  return (
    <>
      <HeaderSimple />
      <h1>Hobbies</h1>
      <HobbiesList />
      <FooterCentered />
    </>
  );
}
