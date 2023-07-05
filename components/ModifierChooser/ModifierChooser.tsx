import { PropsWithChildren } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type ModifierChooserProps = PropsWithChildren<{
  modifiers: Modifier[];
  onChange?: (selected: Modifier | null) => void;
}>;

export const ModifierChooser = ({
  children,
  modifiers,
  onChange,
}: ModifierChooserProps) => {
  // Event handler for the Calculator page element's onChange event
  const handleOnChange = (event: SelectChangeEvent<number>) => {
    // Get the selected modifier ID
    const selectedModifierId = event.target.value;
    // Find the corresponding modifier object or set it to null if not found
    const selectedModifier = modifiers.find((modifier) => modifier.id === selectedModifierId) || null;
    if (onChange) {
      // Invoke the onChange callback with the selected modifier
      onChange(selectedModifier);
    }
  };

  return (
    <FormControl>
      <Select label={children} onChange={handleOnChange}>
        <MenuItem value="">No modifier</MenuItem>
        {modifiers.map(({ id, modifier_code, modifier_type }) => {
          return (
            <MenuItem key={id} value={id} disabled={modifier_type === "LMTS"}> {/* The options are disabled if modifier_type is LMTS */}
              {modifier_code}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};






