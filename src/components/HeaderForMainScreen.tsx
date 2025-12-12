import HeaderTabs from "@/components/HeaderTabs";
import Button from "@/components/Button";

export default function HeaderForMainScreen() {
    return (
        <div>
            <div>Undressher</div>
            <HeaderTabs/>
            <div style={{ marginTop: "20px" }}>
                <Button size="M" variant="dark">
                    Try now
                </Button>
        </div>
        </div>
    );
}
