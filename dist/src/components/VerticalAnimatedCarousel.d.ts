import React from "react";
interface Props {
    data: unknown;
    CardItem: React.ComponentType<{
        hasCard: number;
        card: unknown;
    }>;
    containerClassName?: string;
    behindCardSpace?: number;
    maxBehindCardVisibility?: number;
    startFromRight?: boolean;
}
declare const VerticalAnimatedCarousel: React.FC<Props>;
export default VerticalAnimatedCarousel;
