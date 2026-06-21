export default function RightHUD() {
  return (
    <div className="hidden lg:flex flex-col absolute right-8 top-1/2 -translate-y-1/2 space-y-8 border-r border-outline-variant pr-4 text-right">
      <div className="space-y-1">
        <p className="font-label-sm text-[12px] text-outline uppercase">Active_Directives</p>
        <p className="font-code-snippet text-[14px] text-on-surface">08_PROJECT_NEURAL</p>
      </div>
      <div className="space-y-1">
        <p className="font-label-sm text-[12px] text-outline uppercase">Archive_State</p>
        <p className="font-code-snippet text-[14px] text-on-surface">INDEXED_74%</p>
      </div>
      <div className="space-y-1">
        <p className="font-label-sm text-[12px] text-outline uppercase">Auth_Level</p>
        <p className="font-code-snippet text-[14px] text-primary">ADMIN_ROOT</p>
      </div>
      <div className="flex justify-end pt-4">
        <div className="grid grid-cols-4 gap-1">
          <div className="w-2 h-2 bg-primary" />
          <div className="w-2 h-2 bg-primary" />
          <div className="w-2 h-2 bg-primary/20" />
          <div className="w-2 h-2 bg-primary/20" />
        </div>
      </div>
    </div>
  );
}
