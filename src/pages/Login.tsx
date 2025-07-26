import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stethoscope, User, Shield, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'patient' | 'doctor' | 'admin'>('patient');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert(`${userType} login successful! (This is a demo)`);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-elevated">
            <Stethoscope className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-blue-100">Sign in to your DocCare account</p>
        </div>

        <Card className="shadow-elevated border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs value={userType} onValueChange={(value) => setUserType(value as 'patient' | 'doctor' | 'admin')} className="mb-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="patient" className="text-xs">
                  <User className="h-4 w-4 mr-1" />
                  Patient
                </TabsTrigger>
                <TabsTrigger value="doctor" className="text-xs">
                  <Stethoscope className="h-4 w-4 mr-1" />
                  Doctor
                </TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password" 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link to="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="medical" className="w-full" size="lg">
                Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/register" className="text-primary hover:underline font-medium">
                Create Account
              </Link>
            </div>

            {userType === 'patient' && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Demo Credentials:<br />
                  Email: patient@demo.com<br />
                  Password: demo123
                </p>
              </div>
            )}

            {userType === 'doctor' && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Demo Credentials:<br />
                  Email: doctor@demo.com<br />
                  Password: demo123
                </p>
              </div>
            )}

            {userType === 'admin' && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Demo Credentials:<br />
                  Email: admin@demo.com<br />
                  Password: demo123
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link to="/" className="text-blue-100 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;