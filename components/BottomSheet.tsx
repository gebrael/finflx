import React, { forwardRef, PropsWithChildren, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
const BottomSheet = forwardRef<
  BottomSheetModal,
  PropsWithChildren<BottomSheetModalProps>
>(({ children, ...rest }, ref) => {
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      enableDynamicSizing
      backdropComponent={renderBackdrop}
      ref={ref}
      {...rest}
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheet;
